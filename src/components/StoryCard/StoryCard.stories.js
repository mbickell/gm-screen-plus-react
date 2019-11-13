import React from "react";
import StoryCard from "./StoryCard";

const storyData = {
  group: "01",
  title: "Caravan attack",
  content:
    "The group is travelling east from the west. They are escaping a blight that has been vicious in its destruction of not just lives but also the environment. Nearring the midpoint of this journey the caravan is attacked by a group of goblins that have been praying on passing travellers. The caravan is overturned, the heroes knocked unconcious. They awake under an upturned cart and once they look outside they are greeted with 4 goblins and 2 wolves rummaging through belongings"
};

export default {
  title: "StoryCard"
};

export const storyCard = () => <StoryCard storyData={storyData} />;
