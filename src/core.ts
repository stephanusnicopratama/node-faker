import { Request, Response } from "express";
import faker from 'faker';

const core = (req: Request, res: Response) => {
  const { body } = req;
  let { data = {}, count = 1 } = body;
  let result: Object[] = [];

  while (count !== 0) {
    const keys = Object.keys(data);
    let tempValue = {};

    if (keys.length === 0) res.json(tempValue)

    keys.map(key => {
      const value = data[key];
      if (value === 'string') tempValue = { ...tempValue, [key]: handleString() }
      if (value === 'email') tempValue = { ...tempValue, [key]: handleEmail() }
      if (value === 'number') tempValue = { ...tempValue, [key]: handleNumber() }
      if (value === 'guid') tempValue = { ...tempValue, [key]: handleGuid() }
      if (value === 'address') tempValue = { ...tempValue, [key]: handleAddress() }
      if (value === 'boolean') tempValue = { ...tempValue, [key]: handleBoolean() }
      if (value === 'lat') tempValue = { ...tempValue, [key]: handleLat() }
      if (value === 'date') tempValue = { ...tempValue, [key]: handleDate() }
    });

    result.push(tempValue);
    count--;
  }

  res.json(result);
};

function handleString() {
  return faker.lorem.words();
}

function handleEmail() {
  return faker.internet.email()
}

function handleNumber() {
  return faker.random.number();
}

function handleGuid() {
  return faker.random.uuid();
}

function handleAddress() {
  return faker.address.streetAddress()
}

function handleBoolean() {
  return faker.random.boolean();
}

function handleLat() {
  return faker.address.latitude();
}

function handleDate() {
  return faker.date.future()
}

export default core;