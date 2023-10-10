#!/bin/bash

image_url=$(ag hackmd.io | grep png | awk -F ']' '{print $2}' | cut -d '(' -f2  | cut -d ')' -f1 | grep https)
for i in $image_url
do
	img=$(basename $i)
	wget $i
	echo $img
done

image_url=$(ag "imgur.com" | grep -E "png|jpg" | awk -F ']' '{print $2}' | cut -d '(' -f2  | cut -d ')' -f1 | grep https)
for i in $image_url
do
	img=$(basename $i)
	wget $i
	echo $i
done
