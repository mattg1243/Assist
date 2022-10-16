//
//  Counter.m
//  Assist
//
//  Created by Matt Gallucci on 10/16/22.
//

#import <Foundation/Foundation.h>
// import React Native header in order to use macros for bridging swift
#import "React/RCTBridgeModule.h"
// pass custom native module to React Native w the macro
@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(increment)

@end
