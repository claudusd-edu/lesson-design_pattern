<?php

interface Employee
{
  public function prepare();
}

class SandwichMaker implements Employee
{
  public function prepare()
  {
    echo "Prepare a sandwich";
  }
}

class Barista implements Employee
{
  public function prepare()
  {
    echo "Prepare a coffee";
  }
}

abstract class Producer
{
    abstract protected function makeEmployee(): Employee;

    public function takeOrder()
    {
      $employee = $this->makeEmployee();
      $employee->prepare();
    }
}

class SandwichProducer extends Producer
{
  protected function makeEmployee()
  {
    return new SandwichMaker()
  }
}


class CoffeeProducer extends Producer
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
