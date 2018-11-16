const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


exports.firestoreEmail = functions.firestore.document('posts/{postid}')
        .onCreate(event => {
            console.log(event.data());
            const post = event.data();
            const db = admin.firestore();
            const promises = [];
            const mailOptions = {
                from: `Aid4Kids <noreply@firebase.com>`,
              };
            for(let i=0; i < post.children.length; i++) {
                db.collection('childs').doc(post.children[i]).get()
                .then(doc => {
                    const child = doc.data();
                    mailOptions.to = child.parent;
                    mailOptions.subject = 'New Post for Child';
                    mailOptions.text = `Hey!, A new post ${post.message}.`;
                    promises.push(mailTransport.sendMail(mailOptions));
                    return true;
                })
                .catch(err => {
                    console.log("Error in fetching child", err);
                })
            }
            return Promise.all(promises)
            .then(() => {console.log('emails sent'); return true;})
            .catch(err => {console.log('Sending emails failed - ', err)})
        });