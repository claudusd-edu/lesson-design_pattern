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
    abstract protected function makeEmployee(): Employee;

    final public function takeOrder(): Order
    {
      $employee = $this->makeEmployee();
      return $employee->prepare();
    }
}

class SandwichProducer extends OrderFactory
{
  protected function makeEmployee()
  {
    return new SandwichMaker()
  }
}


class CoffeeProducer extends OrderFactory
{
  protected function makeEmployee()
  {
    return new Barista();
  }
}

$sandwichProducer = new SandwichProducer();
$sandwichProducer->takeOrder();

$coffeeProducer = new CoffeeProducer();
$coffeeProducer->takeOrder();
