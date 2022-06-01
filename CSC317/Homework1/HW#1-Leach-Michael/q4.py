# -*- coding: utf-8 -*-
"""
Created on Sat Feb 26 12:57:29 2022

@author: Michael Leach
"""

from matplotlib import pyplot as plt
import cv2

img = cv2.imread('hamster.jpg', cv2.IMREAD_COLOR)
cv2.imshow('hampter', img)

#Make the blue image
b_img = img.copy ()   # image is the original color image 
b_img [ : , : , 1] = 0  # set green channel to 0 
b_img [ : , : , 2] = 0  # set red channel to 0

#Make the red image
r_img = img.copy ()   # image is the original color image 
r_img [ : , : , 1] = 0  # set green channel to 0 
r_img [ : , : , 0] = 0  # set blue channel to 0

#make the green image
g_img = img.copy ()   # image is the original color image 
g_img [ : , : , 0] = 0  # set blue channel to 0 
g_img [ : , : , 2] = 0  # set red channel to 0

#split the Red, Green, and Blue channels and then merge them back together
blue, green, red = cv2.split(img)
merge = cv2.merge([blue, green, red])

#Now we must set the red channel pixels to 0
bg_img = img.copy()
bg_img [ : , : , 2] = 0  # set red channel to 0

#Now lets merge (b, b, b)
bbb = cv2.merge([blue, blue, blue])


cv2.imshow('blue', b_img)
cv2.imshow('red', r_img)
cv2.imshow('green', g_img)
cv2.imshow('Merged', merge)
cv2.imshow('blue and green', bg_img)
cv2.imshow('(b, b, b)', bbb)
cv2.waitKey(0)
cv2.destroyAllWindows()