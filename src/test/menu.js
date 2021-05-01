require("dotenv").config();
const app = require("../server.js");
const mongoose = require("mongoose");
const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;

// const User = require("../models/user.js");
// const Message = require("../models/message.js");
// ADD CORRECT MODELS

chai.config.includeStack = true;

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe("Message API endpoints", () => {
  beforeEach((done) => {
//     const sampleUser = new User({
//       username: "newuser",
//       password: "mypassword",
//     });

//     const sampleMessage = new Message({
//       title: "mytitle",
//       body: "mybody",
//     });

//     sampleUser
//       .save()
//       .then(() => {
//         sampleMessage.author = sampleUser;
//         return sampleMessage.save();
//       })
//       .then(() => {
//         sampleUser.messages.unshift(sampleMessage);
//         return sampleUser.save();
//       })
//       .then(() => {
//         done();
//       });
//   });

//   afterEach((done) => {
//     User.deleteMany({ username: ["newuser"] })
//       .then(() => {
//         return Message.deleteMany({ title: ["mytitle", "anothertitle"] });
//       })
//       .then(() => {
//         done();
//       });
//   });

//   it("should load all messages", (done) => {
//     chai
//       .request(app)
//       .get("/messages")
//       .end((err, res) => {
//         if (err) {
//           done(err);
//         }
//         expect(res).to.have.status(200);
//         expect(res.body.messages).to.be.an("array");
//         done();
//       });
   });
})