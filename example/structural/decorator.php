<?php

interface Coffee
{
  public function getPrice(): float;

  public function getDescriptio(): string;
}

class SimpleCoffee implements Coffee
{
  public function getPrice(): float
  {
    return 1;
  }

  public function getDescription()
  {
    return 'Simple coffee';
  }
}

class MilkCoffee implements Coffee
{
  protected $coffee;

  public function _construct(Coffee $coffee)
  {
    $this->coffee = $coffee;
  }

  public function getPrice(): float
  {
    return $this->coffee->getPrice() * 1,2;
  }

  public function getDescription(): string
  {
    return $this->coffee->getDescription(). ', milk';
  }
}

class StarbuckCoffee implements Coffee
{
  protected $coffee;

  public function _construct(Coffee $coffee)
  {
    $this->coffee = $coffee;
  }

  public function getPrice(): float
  {
    return $this->coffee->getPrice() + 1;
  }

  public function getDescription(): string
  {
    return 'Starbuck '$this->coffee->getDescription();
  }
}


$simpleCoffee = new SimpleCoffee();
echo $simpleCoffee->getPrice(); // 1
echo $simpleCoffee->getDescription(); // Simple coffee

$milkCoffee = new MilkCoffee($simpleCoffee);
echo $milkCoffee->getPrice(); // 1.2
echo $milkCoffee->getDescription(); // Simple coffee, milk

$starbuckCoffee = new StarbuckCoffee($milkCoffee);
echo $starbuckCoffee->getPrice(); // 2.2
echo $starbuckCoffee->getDescription(); // Starbuck Simple coffee, milk






//
