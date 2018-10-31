<?php

interface Product
{

}

class Espresso implements Product
{

}

class sandwich implements Product
{

}

interface Employee
{

}

class Barista implements Employee
{

}

class SandwichMaker implements Employee
{

}


interface ProductFactory
{
  public function makeEmployee(): Employee;

  public function makeProduct(): Product;
}


class SandwichFactory implements ProductFactory
{
  public function makeEmployee()
  {
    return new SandwichMaker();
  }

  public function makeProduct()
  {
    return new sandwich();
  }
}

class EspressoFactory implements ProductFactory
{
  public function makeEmployee()
  {
    return new Barista();
  }

  public function makeProduct()
  {
    return new Espresso();
  }
}

$sandwichFactory = new SandwichFactory();
$employee = $sandwichFactory->makeEmployee();
$product = $sandwichFactory->makeProduct();


$espressoFactory = new ExpressoFactory();
$employee = $espressoFactory->makeEmployee();
$product = $espressoFactory->makeProduct();





//
