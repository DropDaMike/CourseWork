# -*- coding: utf-8 -*-
"""
Created on Wed Apr 13 16:38:20 2022

@author: Michael Leach
"""
import numpy as np
from numpy.fft import fft as fft

a = np.array([2,4,4,1])
print(fft(a))


