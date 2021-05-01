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
        order = table.order
        Order.deleteOne(order).then(() => {
          Table.deleteOne(table);
        })
        
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

  it("should get one specific table with its order", (done) => {
    Table.findOne({ number: "1" }).then((table) => {
      console.log("Table number is :", table.number)
      chai
        .request(app)
        .get(`/tables/${table.number}`)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          console.log("Response Body is :", res.body)
          console.log("Response Status is :", res.status)
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body.number).to.equal("1");
          done();
        });
    })
    })
  ;

  it("should create a new table", (done) => {
      chai
        .request(app)
        .post("/tables")
        .send({
          number: "2",
        })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body).to.be.an("object");
          console.log(res.body)
          expect(res.body.table).to.have.property("number", "2");
          // check that table is actually inserted into database
          Table.findOne({ number: "2" }).then((table) => {
            expect(table).to.be.an("object");
            console.log(table.number)
            done();
          });
        });
      })

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

