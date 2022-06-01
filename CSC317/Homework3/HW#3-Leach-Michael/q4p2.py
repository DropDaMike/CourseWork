# -*- coding: utf-8 -*-
"""
Created on Sat May  7 03:00:10 2022

@author: Michael Leach
"""
import cv2
import numpy as np
sudoku = cv2.imread('sudoku2.jpg')
gray = cv2.cvtColor(sudoku, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 50, 150, apertureSize = 3)
lines =cv2.HoughLines(edges, 1, np.pi/180, 200)
for line in lines:
    ##rho, theta = line[0]
    rho = 4/np.sqrt(17)
    ##NOTE: Positive values in theta value make the line appear above
    ##the image generated, this means the line will not show up if
    ## arctan is a positive value. So I flipped 4 into -4 which flips
    ##the image but gets the correct result.
    theta = np.arctan(-4)
    a = np.cos(theta)
    b = np.sin(theta)
    x0 = a*rho
    y0 = b*rho
    x1 = int(x0 + 1000*(-b))
    y1 = int(y0 + 1000*(a))
    x2 = int(x0 - 1000*(-b))
    y2 = int(y0 - 1000*(a))
    cv2.line(sudoku, (x1,y1),(x2,y2),(0,255,0),2)
cv2.imwrite('houghlines2.png', sudoku)
