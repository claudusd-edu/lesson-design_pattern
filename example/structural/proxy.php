<?php

interface Image
{
  public function getContent(): string;

  public function getName(): string;

  public function getSize(): int;
}

class SimpleImage implements Image
{
  private $fileName;

  private $content;

  private $name;

  public function __construct(string $fileName)
  {
    $this->fileName = $fileName;
    $this->content = file_get_content($fileName);
    $this->size = filesize($fileName);
  }

  public function getContent(): string
  {
    return $this->content;
  }

  public function getName(): string
  {
    return $this->fileName;
  }

  public function getSize(): int
  {
    return $this->size;
  }
}

class ProxyImage implements Image
{
  private $fileName;

  private $image;

  public function __construct(string $fileName)
  {
    $this->fileName = $fileName;
  }

  private function initialize()
  {
    $this->image = new SimpleImage($this->fileName);
  }

  public function getName(): string
  {
    if ($this->image) {
      return $this->image->getName();
    }
    return $this->fileName;
  }

  public function getContent(): string
  {
    $this->initialize();
    return $this->image->getContent();
  }

  public function getSize(): int
  {
    $this->initialize();
    return $this->image->getSize();
  }
}
