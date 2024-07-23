"use client"
import ButtonComponent from '@/app/component/Button';
import { savedProduct } from '@/app/helpers/arrays';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'

interface props {
    name: string;
    image: string;
    price: number;
    productId: string;
  }
const SaveProductBtn = (params:props) => {
    const { image, name, price, productId } = params;
    const [saved, setSaved] = useState(false);
  return (
    <div onClick={() => {
        setSaved((prev) => !prev);
        savedProduct.push({
          name: name,
          image: image,
          price: price,
          saved: saved,
          id: productId,
        });
      }} className="inline-flex gap-2 items-center">
    <ButtonComponent
      title={"Save"}
      color={""}
      iconPosition="left"
      icon={saved ? (
        <HeartFilled className="text-textDefaultGreen" />
      ) : (
        <HeartOutlined className="text-textPrimaryColor" />
      )}
    />
    <Icon
      icon="charm:menu-kebab"
      width="20"
      height="20"
      className="text-textTitlesColor"
    />
  </div>
  )
}

export default SaveProductBtn