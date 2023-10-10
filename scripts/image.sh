#!/bin/bash
#
image_url=$(ag  | grep png | awk -F ']' '{print $2}' | cut -d '(' -f2  | cut -d ')' -f1 | grep https)

for i in $image_url
do
	img=$(basename $i)
	wget $i
	mv $img assets/
	echo $img
done
