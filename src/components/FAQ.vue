<template>
  <div id="background">
    <div class="faqq">
        <VueFaqAccordion :items="myItems" />
    </div>   
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
          title: "Why should I choose Prodigy?",
          value:
            "Founded in 2015, Prodigy has helped more than 2,000 people find their dream homes through the efforts of more than 100 of our dedicated employees.",
          category: "About Prodigy"
        },
        {
          title: "In which cities do you offer your services?",
          value:
            "Our services are available in Thessaloniki, Greece.",
          category: "About Prodigy"
        },
        {
          title: "Who should I contact in case I face any issues?",
          value:
            "We have a dedicated customer care service team, which is available at your service seven days a week from 9:00 am to 6:00 pm. You can call them on 2310-123456 or mail customer service at customer.service@prodigy.gr.",
          category: "About Prodigy"
        },
        {
          title: "How soon would I receive a call from you after placing my requirement?",
          value:
            "You would receive a call back from us within 10-15 minutes of placing your enquiry with us, provided you have posted your requirements between 9:00 am and 6:00 pm. Otherwise, we would be reaching you the next day.",
          category: "About Prodigy"
        },
        {
          title: "How many properties can I own?",
          value:
            "You can own as many properties as you want.",
          category: "Buyers Corner"
        },
        {
          title: "What are Capital Gains on property purchase?",
          value:
            "Property is considered a capital asset and Capital Gains Tax is levied on the gains arising from the sale of property. Such gains are calculated after adjusting the inflation rate, transfer and renovation charges.",
          category: "Buyers Corner"
        },
        {
          title: "Can I authorize someone else to register my property by granting him Power of Attorney?",
          value:
            "Yes, you can execute Special Power Of Attorney to get your property registered by someone else.",
          category: "Buyers Corner"
        },
        {
          title: "What is Power Of Attorney?",
          value:
            "Power of Attorney allows a person to authorize another person the right to make decisions regarding the person's assets, finances and real estate properties. There are two types of power of attorney. First, the 'General Power of Attorney' where a property owner confers 'general' rights. The rights include but are not limited to sell, lease, sub-lease etc. The second one is the 'Special Power of Attorney' where only a specific right is given by the owner to the chosen person.",
          category: "Buyers Corner"
        },
        {
          title: "How can I register my property?",
          value:
            "Registration of a property includes necessary stamping and paying of registration charges for a sale deed and getting it recorded at the sub-registrar's office of the concerned jurisdictional area. If a property is purchased from a developer directly, getting it registered amounts to act of legal conveyance. In case the purchased property is a second or third transaction, it involves a duly stamped and registered transfer deed. Nowadays, property registration process is computerized in most states.",
          category: "Buyers Corner"
        },
        {
          title: "Who needs to pay the stamp duty? The seller or the buyer?",
          value: "Only the buyer pays the Stamp Duty.",
          category: "Seller Corner"
        },
        {
          title: "I want to sell my property. What are the documents a buyer would need from me?",
          value:
            "A buyer could ask you for the original Sale Deed, Title Deed, relevant tax receipts and Encumbrance Certificate.",
          category: "Seller Corner"
        },
        {
          title: "Is it mandatory to register documents for the sale of property?",
          value: "Yes. You can get it done at the sub-registrar's office of the concerned district.",
          category: "Seller Corner"
        },
        {
          title: "When is the sale of a residential property formalized?",
          value: "The sale of a residential property is said to have been formalized if the seller has received the entire consideration amount, registration of the documents has been carried out and actual possession of the property has been granted to the buyer.",
          category: "Seller Corner"
        },
        {
          title: "How soon would I receive a call from you after posting my property for sale?",
          value: "You would receive a call back from us within 10-15 minutes of placing your enquiry with us, provided you have posted your requirements between 9:00 am and 6:00 pm. Otherwise, we would be reaching you the next day.",
          category: "Seller Corner"
        },
        {
          title: "I want to sell my property. How can Prodigy help me?",
          value: "For selling your property, you need to fill an enquiry form, which is available on the home page of our website.",
          category: "Seller Corner"
        }
      ]
    }
  }  
}
</script>

<style>

#background {
  background-image: url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-size: cover;
  background-position: bottom center;
  height: 860px;
  width: 100%;
  color: black !important;
  
}

#background .faqq {
  display: block;
   font-family: 'Rajdhani', sans-serif;
   font-weight: 1100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: black !important;
  position: relative;
  margin: auto;
  top: 50px; 
  width: 1000px;
  /* border: 2px solid grey; */
  background-color:whitesmoke;
  opacity: 0.85; 
  padding: 50px;
}



</style>