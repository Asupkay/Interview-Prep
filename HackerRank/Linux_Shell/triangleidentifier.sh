#!/bin/bash
read side1
read side2
read side3

if ((side1 == side2)) && ((side2 == side3))
then
    echo EQUILATERAL
elif ((side1 == side2)) || ((side2 == side3)) || ((side3 == side1)) 
then
    echo ISOSCELES
else 
    echo SCALENE
fi
