<?php

interface Employee
{
  public function prepare(): Order;
}

class SandwichMaker implements Employee
{
  public function prepare()
  {
    return new Order();
  }
}

class Barista implements Employee
{
  public function prepare()
  {
    return new Order();
  }
}

abstract class OrderFactory
{
    abstract public function makeEmployee(): Employee;

    final public function takeOrder(): Order
    {
      $employee = $this->makeEmployee();
      return $employee->prepare();
    }
}

class SandwichProducer extends OrderFactory
{
  public function makeEmployee()
  {
    return new SandwichMaker()
  }
}


class CoffeeProducer extends OrderFactory
{
  public function makeEmployee()
  {
    return new Barista();
  }
}

$sandwichProducer = new SandwichProducer();
$obj1 = $sandwichProducer->takeOrder();

$coffeeProducer = new CoffeeProducer();
$obj2 = $coffeeProducer->takeOrder();

$obj1 === $obj2;

$producer1 = $sandwichProducer->makeEmployee();
$producer2 = $coffeeProducer->makeEmployee();

$producer1 === $producer2;

get_class($producer1);
get_class($producer2);
