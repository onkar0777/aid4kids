const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);


exports.firestoreEmail = functions.firestore.document('posts/{postid}')
        .onCreate(event => {
            console.log(event.data());
            const post = event.data();
            const db = admin.firestore();
            const promises = [];
            for(let i=0; i < post.children.length; i++) {
                db.collection('childs').doc(post.children[i]).get()
                .then(doc => {
                    const child = doc.data();

                    const msg = {
                        to: child.parent,
                        from: 'onkarsinghmnit@gmail.com',
                        subject: 'New Post for Child',
                        templateId: 'd-959dc75af96945bb88bb5177b0f7a4d0',
                        substiutionWrappers: ['{{', '}}'],
                        substitutions: {
                            // Using Parent for now, will replace with actual parent name later
                            name: 'Parent',

                        }
                    }
                    promises.push(sgMail.send(msg));
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