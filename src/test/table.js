require("dotenv").config();
const app = require("../server.js");
const mongoose = require("mongoose");
const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;

const Table = require("../models/table.js");
const Order = require("../models/order.js");

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
    const sampleTable = new Table({
      number: "1",
    });

    const sampleOrder = new Order({
      drink: "Water",
      food: "Chicken",
    });

    sampleTable
      .save()
      .then(() => {
        sampleOrder.table = sampleTable;
        return sampleOrder.save();
      })
      .then(() => {
        sampleTable.order = sampleOrder;
        return sampleTable.save();
      })
      .then(() => {
        done();
      });
  });

  afterEach((done) => {
      table = Table.findOne({number : "1"})
      .then(table => {
        order = table.order[0];
      })
      .then(order => {
            Order.deleteMany({ id: order._id })
              .then(() => {
                return Table.deleteMany({ number: ["1"] });
              })
              .then(() => {
                done();
              });
      })
      

  });

  it("should load all tables", (done) => {
    chai
      .request(app)
      .get("/tables")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body.tables).to.be.an("array");
        done();
      });
  });

  // it("should get one specific table with its order", (done) => {
  //   const table = Table.findOne({ number: "1" });
  //   chai
  //     .request(app)
  //     .get(`/table/${table._id}`)
  //     .end((err, res) => {
  //       if (err) {
  //         done(err);
  //       }
  //       expect(res).to.have.status(200);
  //       expect(res.body).to.be.an("object");
  //       expect(res.body.number).to.equal("1");
  //       done();
  //     });
  // });

//   it("should create a new table", (done) => {
//     User.findOne({ username: "newuser" }).then((user) => {
//       chai
//         .request(app)
//         .post("/messages")
//         .send({
//           title: "anothertitle",
//           body: "anotherbody",
//           author: user,
//         })
//         .end((err, res) => {
//           if (err) {
//             done(err);
//           }
//           expect(res.body).to.be.an("object");
//           expect(res.body).to.have.property("title", "anothertitle");
//           // check that message is actually inserted into database
//           Message.findOne({ title: "anothertitle" }).then((message) => {
//             expect(message).to.be.an("object");
//             done();
//           });
//         });
//     });
//   });

//   it("should update a table number", (done) => {
//     Message.findOne({ title: "mytitle" }).then((message) => {
//       console.log("The message title is: ", message);
//       done();
//       // chai
//       // .request(app)
//       // .put(`/message/${message._id}`)
//       // .send({ title: "somenewtitle" })
//       // .end((err, res) => {
//       //   if (err) {
//       //     done(err);
//       //   }
//       //   expect(res.body).to.be.an("object");
//       //   expect(res.body).to.have.property("title", "somenewtitle");

//       //   // check that user is actually inserted into database
//       // Message.findOne({ title: "somenewtitle" }).then((message) => {
//       // expect(message).to.be.an("object");
//       // done();
//       // });
//       // })
//     });
//   });

  // it("should delete a table", (done) => {
  //   const message = Message.findOne({ title: "mytitle" });
  //   chai.request(app)
  //       .delete(`/messages/${message._id}`)
  //       .end((err, res) => {
  //           if (err) { done(err) }
  //           expect(res.body.message).to.equal('Successfully deleted.')
  //           expect(res.body._id).to.equal(message._id)

  //           // check that user is actually deleted from database
  //           Message.findOne({title: 'mytitle'}).then(message => {
  //               expect(message).to.equal(null)
  //               done()
  //           })
  //       })
  //   })
});
