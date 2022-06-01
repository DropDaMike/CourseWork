# -*- coding: utf-8 -*-
"""
Created on Wed Apr  6 03:17:41 2022

@author: Michael Leach
"""

import skimage.color as co
from matplotlib import pyplot as plt
import cv2
import skimage.io as io
import skimage.util.noise as noise
import scipy.ndimage as ndi
import numpy as np

#add 20% salt and pepper noise to an image
img = io.imread('mtfuji3.jpg')
##rn = noise.random_noise(img,mode='s&p')
rn20p = noise.random_noise(img,mode='s&p', amount=0.2)

#Now we must use denoise the salt and pepper image using
#the average box filter, guassian filter and median filter.
avg3 = ndi.uniform_filter(rn20p, 3)#average filter
mf3 = ndi.median_filter(rn20p, 3)#median filter
gf2 = ndi.gaussian_filter(rn20p, 2, truncate = 1)#guassian filter
#io.imshow(mf3)

titles=['salt and pepper noise applied', 'average filter', 'median filter', 'guassian filter']
images = [rn20p, avg3, mf3, gf2]

for i in range(4):
    plt.subplot(2,2,i+1),plt.imshow(images[i],'gray')
    plt.title(titles[i])
    plt.xticks([]),plt.yticks([])

plt.show()
