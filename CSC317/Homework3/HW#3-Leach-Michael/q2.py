# -*- coding: utf-8 -*-
"""
Created on Wed May  4 23:30:43 2022

@author: Michael Leach
"""

import cv2
import skimage.io as io
import numpy as np
from matplotlib import pyplot as plt

originalImage = io.imread('circles.png')
c = io.imread('circles.png').astype('bool')*1
x = np.random.random_sample(c.shape)
c[np.nonzero(x>0.95)] = 0
c[np.nonzero(x<=0.05)] = 1

plt.subplot(121),plt.imshow(originalImage, cmap = 'gray')
plt.title('Oruginal Image'), plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(c, cmap = 'gray')
plt.title('Resulting Image'), plt.xticks([]), plt.yticks([])

plt.show()