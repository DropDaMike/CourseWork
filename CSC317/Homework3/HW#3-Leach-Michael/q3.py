# -*- coding: utf-8 -*-
"""
Created on Wed May  4 23:59:28 2022

@author: Michael Leach
"""

import cv2
import numpy as np
from matplotlib import pyplot as plt

hamster = cv2.imread('hamster.jpg',0)

sobelx64Filter = cv2.Sobel(hamster, cv2.CV_64F,1, 0, ksize=5)
sobely64Filter = cv2.Sobel(hamster, cv2.CV_64F,0, 1, ksize=5)

sobelx8uFilter = cv2.Sobel(hamster, cv2.CV_8U,1, 0, ksize=5)
sobely8uFilter = cv2.Sobel(hamster, cv2.CV_8U,0, 1, ksize=5)

abs_sobelx64Filter = np.absolute(sobelx64Filter)
sobelx_8u = np.uint8(abs_sobelx64Filter)

abs_sobely64Filter = np.absolute(sobely64Filter)
sobely_8u = np.uint8(abs_sobely64Filter)

plt.subplot(1,3,1),plt.imshow(hamster, cmap = 'gray')
plt.title('Original Image'), plt.xticks([]), plt.yticks([])
plt.subplot(1,3,2),plt.imshow(sobelx_8u, cmap = 'gray')
plt.title('Sobel X Filter ABS'), plt.xticks([]), plt.yticks([])
plt.subplot(1,3,3),plt.imshow(sobely_8u, cmap = 'gray')
plt.title('Sobel Y Filter ABS'), plt.xticks([]), plt.yticks([])

plt.show()