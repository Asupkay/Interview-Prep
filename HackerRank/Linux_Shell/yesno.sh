#!/bin/bash

read yorn
if [ "$yorn" == "N" ] || [ "$yorn" == "n" ]
then
    echo NO
else
    echo YES
fi

