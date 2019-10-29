<template>
    <div id="faqq">
        <VueFaqAccordion :items="myItems" />
    </div>   
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";

export default {
    name: "FAQ",
    components: {
        VueFaqAccordion
    },
    data() {
    return {
      myItems: [
        {
          title: "How many time zones are there in all?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
          category: "Tab-1"
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          category: "Tab-2"
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Tab-2"
        }
      ]
    };
  }  
};
</script>

<style>
#faqq {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

</style>