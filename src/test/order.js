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

describe("Orders Endpoints", () => {
  beforeEach((done) => {
    const sampleTable = new Table({
      number: "1",
    });

    const sampleOrder = new Order({
      drink: "Water",
      food: "Chicken",
      table: SampleTable
    });

    sampleTable
      .save()
      .then(() => {
        return sampleOrder.save();
      })
      .then(() => {
        done();
      });
  });

  afterEach((done) => {
    // deleteMany doesn actually delete both, only "1"
    Order.deleteOne({ table: "1" })
      .then(() => {
        return Table.deleteOne({ number: "1" });
      })
      .then(() => {
        done();
      });
  });
});

it("should load all orders", (done) => {
  chai
    .request(app)
    .get("/orders")
    .end((err, res) => {
      if (err) {
        done(err);
      }
      expect(res).to.have.status(200);
      expect(res.body.tables).to.be.an("array");
      done();
    });
});
