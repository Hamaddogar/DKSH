import React, { useState } from "react";
import Banner from "../../components/banner";
import Filters from "../../components/filters";
import Images from "../../assets/images";
import Job from "../../components/job";
import "./styles.css";
const Index = () => {
 const [listView, setListView] = useState(false);
 return (
  <>
   <Banner />
   <Filters view={listView} setView={setListView} title="Jobs" hideGridView={true} />
   {jobList.map((job, index) => (
    <Job job={job} index={index} />
   ))}
  </>
 );
};

export default Index;

const jobList = [
 {
  title: "Jessica ina",
  subTitle: "I am looking for a UIUX Designer.",
  description: `Lorem ipsum dolor sit amet consectetur. Ullamcorper sagittis feugiat odio ultricies. Et vitae mauris faucibus ut massa et. Pellentesque non quam odio enim condimentum non arcu. Urna quisque porttitor urna egestas tortor enim aliquam vulputate. Dui egestas etiam eu orci. Luctus pharetra id donec molestie hac. A massa sed dui sit. Ut eget nunc donec etiam. Sit adipiscing orci eu nec ut.`,
  skills: ["UI design", "UX design", "App Design", "Ios", "+3"],
  applications: 12,
  rating: 4.5,
  portfolio: [],
 },
 {
  title: "Melinda Kian",
  subTitle: "I am looking for a UIUX Designer.",
  description: `Lorem ipsum dolor sit amet consectetur. Ullamcorper sagittis feugiat odio ultricies. Et vitae mauris faucibus ut massa et. Pellentesque non quam odio enim condimentum non arcu. Urna quisque porttitor urna egestas tortor enim aliquam vulputate. Dui egestas etiam eu orci. Luctus pharetra id donec molestie hac. A massa sed dui sit. Ut eget nunc donec etiam. Sit adipiscing orci eu nec ut.`,
  skills: ["UI design", "UX design", "App Design", "Ios", "+3"],
  applications: 1,
  rating: 4.5,
  portfolio: [Images.grid1, Images.grid2, Images.grid3],
 },
 {
  title: "Soffie Marie",
  subTitle: "I am looking for a UIUX Designer.",
  description: `Lorem ipsum dolor sit amet consectetur. Ullamcorper sagittis feugiat odio ultricies. Et vitae mauris faucibus ut massa et. Pellentesque non quam odio enim condimentum non arcu. Urna quisque porttitor urna egestas tortor enim aliquam vulputate. Dui egestas etiam eu orci. Luctus pharetra id donec molestie hac. A massa sed dui sit. Ut eget nunc donec etiam. Sit adipiscing orci eu nec ut.`,
  skills: ["UI design", "UX design", "App Design", "Ios", "+3"],
  applications: 12,
  rating: 4.5,
  portfolio: [Images.grid1, Images.grid2, Images.grid3],
 },
];
