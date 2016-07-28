/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTRootView.h"


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  NSString *bundleUrl;
  BOOL isDev = YES;
  if (isDev) {
    bundleUrl = @"http://127.0.0.1:8081/index.ios.bundle?platform=ios&dev=true";
  }else{
    bundleUrl = @"http://123.57.39.116:3000/main.ios.jsbundle";
  }
  
  /*
   * 读取Doucuments目录，如果有文件，则取该文件，如果不存在；则走Bundle/main.jsbundle
   * 1）Doucuments目录
   * 2）Bundle内目录
   */
  //NSLog(@"%@", !isDev ? @"No": @"YES");
  NSString *filePath;
  if(!isDev){
    //正式环境
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *docDir = [paths objectAtIndex:0];
    filePath = [NSString stringWithFormat:@"%@%@", docDir, @"/main.jsbundle"];
    NSFileManager *fm=[NSFileManager defaultManager];
    //读取Documnts内资源
    if ([fm fileExistsAtPath:filePath]) {
      jsCodeLocation = [NSURL fileURLWithPath: filePath];
    }else{
      jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    }
  }else{
    //测试环境
    jsCodeLocation = [[NSURL alloc]initWithString:bundleUrl];
  }
  
  /*
   * React Native视图加载
   *
   */
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"toilet"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  /*
   * 读取远程代码
   * 将远程代码下载下来，然后替换本地文件
   *
   * 下载zip，并解压
   */
  if (!isDev){
    dispatch_async(dispatch_get_global_queue(0, 0), ^{
      NSString *urlAsString = bundleUrl;
      NSURL *url = [NSURL URLWithString:urlAsString];
      NSURLRequest *request = [NSURLRequest requestWithURL:url];
      NSError *error = nil;
      NSData *data = [NSURLConnection sendSynchronousRequest:request returningResponse:nil error:&error];
      NSString *result = [[NSString alloc] initWithData:data  encoding:NSUTF8StringEncoding];
      if (data!= nil) {
        BOOL isSave=[result writeToFile:filePath atomically:YES encoding:NSUTF8StringEncoding error:nil];
        if (isSave) {}
      }
    });
  }
  
  return YES;
}

@end