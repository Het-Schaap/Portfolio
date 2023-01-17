<template>
  <div id="contact">
    <div>
      <h1 class="text-primary">Contact</h1>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor, congue ut gravida sit amet, condimentum quis risus. Sed quis auctor
      nulla. Morbi vestibulum commodo libero. Mauris sed elit porta, porttitor mi quis, dictum elit. Etiam in dapibus orci, nec consequat tortor. Sed
      mollis ante eget porttitor sodales. Pellentesque scelerisque magna arcu, ut luctus ex vehicula imperdiet. <br />

      In ut porttitor ipsum, quis tristique sem. Aenean leo nibh, euismod ac velit vel, tincidunt interdum mauris. Nam vestibulum ante at odio
      maximus, vitae varius mi finibus. Quisque odio eros, tincidunt bibendum metus non, mattis cursus justo. Nam quam lorem, rutrum quis bibendum ac,
      tincidunt a turpis. Proin convallis facilisis magna, sed imperdiet neque pretium ac. Morbi laoreet sem et libero convallis, id laoreet turpis
      pharetra. Quisque eget luctus mauris. Sed ac nisi mattis, consectetur felis at, varius odio.<br />

      Praesent nec ipsum luctus, viverra nibh ut, consequat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non egestas urna.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada arcu eu lacus dictum commodo. Nam vel mi
      fermentum, congue orci et, convallis odio. Vivamus sed velit ac justo pulvinar lacinia ac quis quam. Proin eget tincidunt leo.<br />

      Cras eleifend ultricies tortor ut mollis. Praesent posuere elit maximus sapien rutrum imperdiet. Nam varius enim at molestie ultrices. Nulla id
      quam sed diam blandit aliquet. Aenean a purus varius, fermentum ante interdum, mattis leo. Curabitur quis pellentesque dolor. Sed pellentesque
      bibendum consequat. Curabitur ut felis nunc. Mauris eget efficitur nunc. Etiam lacinia dolor at ante hendrerit semper. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Mauris iaculis viverra nisi, nec cursus ligula posuere vel.<br />

      Duis luctus, nisl a ultrices ultricies, ante risus porta massa, in malesuada massa tellus nec odio. Donec eu gravida erat. Suspendisse finibus
      elit sed posuere elementum. Donec sit amet congue odio. Phasellus vestibulum ligula tristique, ullamcorper felis vel, ultrices augue. Fusce
      lacinia sapien ligula, sit amet varius felis luctus et. Mauris est mauris, hendrerit id ligula ut, dignissim sollicitudin purus. <br />
    </div>
    <v-form>
      <v-text-field v-model="msg.subject" label="Subject" placeholder="Subject" outlined dense color="primary"></v-text-field>
      <v-textarea v-model="msg.text" label="Text" placeholder="Text" outlined color="primary"></v-textarea>
      <v-btn @click="sendMail()" color="primary"><v-icon class="icon">mdi-email-fast</v-icon>Send</v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// const sgMail = require('@sendgrid/mail')
// // sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: '',
  from: '',
  subject: '',
  text: '',
  html: '',
}

const mailFooterText = '\n\n\n This is an automated message from the contact form on the portfolio. \n\n User: ' + activeUser.userName

function sendMail() {
  msg.subject = '[Contact form]' + msg.subject
  msg.text = msg.text + mailFooterText
  //   sgMail
  //     .send(msg)
  //     .then((response: any) => {
  //       console.log(response[0].statusCode)
  //       console.log(response[0].headers)
  //     })
  //     .catch((error: any) => {
  //       console.error(error)
  //     })
}
</script>

<style scoped lang="scss"></style>
