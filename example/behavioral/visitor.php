<?php

interface Employee
{
  public function accept(Serializer $serializer): string;
}

interface Serializer
{
    public function visitChef(Chef $chef): string;

    public function visiteWaiter(Waiter $waiter): string;
}

class Chef implements Employee
{
  public function accept(Serializer $serializer): string
  {
    return $serializer->visitChef($this);
  }
}

class Waiter implements Employee
{
  public function accept(Serializer $serializer): string
  {
    return $serializer->visiteWaiter($this);
  }
}

class XMLSerializer implements Serializer
{
  public function visitChef(Chef $chef): string
  {
    return "<chef />";
  }

  public function visiteWaiter(Waiter $waiter): string
  {
    return "<waiter />";
  }
}

class JSONSerializer implements Serializer
{
  public function visitChef(Chef $chef): string
  {
    return '{"type": "chef"}';
  }

  public function visiteWaiter(Waiter $waiter): string
  {
    return '{"type": "waiter"}';
  }
}

$xml = new XMLSerializer();
$json = new JSONSerializer();

$chef = new Chef();
$waiter = new Waiter();

echo $chef->accept($xml);
echo $chef->accept($json);
echo $waiter->accept($xml);
echo $waiter->accept($json);
