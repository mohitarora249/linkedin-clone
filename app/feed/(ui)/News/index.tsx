"use client"
import { Card, List, Typography } from "antd";
import React from "react";
import NewsListItem from "./NewsListItem";

const NEWS = [
  {
    title: 'Latest Tech Gadgets Unveiled',
    postTime: '5h',
    id: '_0sq8lrch4',
    readers: 772
  },
  {
    title: 'SpaceX Launches New Satellite',
    postTime: '21h',
    id: '_eat6amj6r',
    readers: 712
  },
  {
    title: '5G Networks Transforming Communication',
    postTime: '24h',
    id: '_qjzejx6n0',
    readers: 557
  },
  {
    title: 'Cybersecurity Threats on the Rise',
    postTime: '2h',
    id: '_sil7w7yp5',
    readers: 61
  },
  {
    title: 'Latest Tech Gadgets Unveiled',
    postTime: '8h',
    id: '_tiknjag3b',
    readers: 41
  },
  {
    title: 'Blockchain Technology Revolution',
    postTime: '22h',
    id: '_d1anqmcc9',
    readers: 383
  },
  {
    title: "NASA's Mission to Mars Update",
    postTime: '15h',
    id: '_o3n8m9dvz',
    readers: 481
  },
  {
    title: 'Latest Tech Gadgets Unveiled',
    postTime: '2h',
    id: '_t9a9lnwng',
    readers: 573
  },
  {
    title: "NASA's Mission to Mars Update",
    postTime: '8h',
    id: '_nwebvr1bg',
    readers: 727
  },
  {
    title: 'Robotics in Healthcare',
    postTime: '10h',
    id: '_8cz0q8tw6',
    readers: 745
  }
]

const News = () => {
  return (
    <Card>
      <Typography.Title level={5}>News</Typography.Title>
      <List
        dataSource={NEWS}
        renderItem={(item, idx) => <NewsListItem key={idx} news={item} />}
      />
    </Card>
  )
}

export default News;
