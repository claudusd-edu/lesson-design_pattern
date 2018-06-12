<?php

interface Employee
{
  public function getSalary(): float;
}

class Chef implements Employee
{
  public function getSalary()
  {
    return 2000;
  }
}

class Waiter implements Employee
{
  public function getSalary()
  {
    return 1500;
  }
}

class Restaurant
{
  private $employees = [];

  public function addEmployee(Employee $employee)
  {
    $this->employees[] = $employee;
  }

  public function getNetSalaries(): float
  {
    $netSalary = 0;
    foreach ($this->employee as $employee) {
      $netSalary += $employee->getSalary();
    }
    return $netSalary;
  }
}

$restaurant = new Restaurant();
$restaurant->add(new Chef());
$restaurant->add(new Waiter());
$restaurant->add(new Waiter());

echo $restaurant->getNetSalaries();
