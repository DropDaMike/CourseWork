# -*- coding: utf-8 -*-
"""
Created on Fri Feb 25 23:01:46 2022

@author: Michael Leach
"""
import skimage.io as io
import skimage.exposure as ex
import pylab
import numpy as np
import cv2
from matplotlib import pyplot as plt

cap = cv2.VideoCapture(0)
cv2.namedWindow("Camera")

#Press space to take a capture
#Press esc to exit program
while(True):
    ret, frame = cap.read()
    if not ret:
        print("ERROR! Could not retrieve frame!")
        break
    cv2.imshow("Camera", frame)
    
    k = cv2.waitKey(1)
    if k%256 == 27:
        #ESC is pressed
        print("Exiting program...")
        break
    elif k%256 == 32:
        # SPACE pressed
        cv2.imwrite('output.jpg', frame)
        print("Picture captured!".format('output.jpg'))
        img = cv2.imread("output.jpg",0) 
        histr = cv2.calcHist([img],[0],None,[256],[0,256])
        plt.plot(histr) 
        plt.show()
        equ = cv2.equalizeHist(img)
        cv2.imshow('Equalized Capture', equ)
        cv2.imshow('Captured altered image', img)
        
   
# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()