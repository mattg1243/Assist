//
//  Counter.swift
//  Assist
//
//  Created by Matt Gallucci on 10/16/22.
//

import Foundation

@objc(Counter)
class Conuter: NSObject {
  
  private var count = 0;
  
  @objc
  func increment(){
    count += 1;
    print(count);
  }
  
}
