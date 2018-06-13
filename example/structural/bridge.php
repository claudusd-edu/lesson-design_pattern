<?php

abstract class WebPage
{
  abstract public function getContent(): string;
}

abstract class About extends WebPage
{
  public function getContent(): string
  {
    return "About";
  }
}

class AboutDark extends About
{
  public function getContent(): string
  {
    return parent::getContent(). ' Dark';
  }
}

class AboutLight extends WebPage
{
  public function getContent(): string
  {
    return parent::getContent(). ' Light';
  }
}

abstract class Index extends WebPage
{
  public function getContent(): string
  {
    return "Index";
  }
}

abstract class IndexDark extends Index
{
  public function getContent(): string
  {
    return parent::getContent(). ' Dark';
  }
}

class IndexLight extends Index
{
  public function getContent(): string
  {
    return parent::getContent(). ' Light';
  }
}



//What to Change ?


















interface Theme
{
  public function getColor(): string;
}

class DarkTheme implements Theme
{
  public function getColor(): string
  {
    return 'Dark';
  }
}

class LightTheme implements Theme
{
  public function getColor(): string
  {
    return 'Light';
  }
}


abstract WebPageWithTheme implements Webpage
{
  protected $theme;

  public function __construct(Theme $theme)
  {
      $this->theme = $theme;
  }
}

class About extends WebPageWithTheme
{
  public function getContent(): string
  {
    return "About page in ".$this->theme->getColor();
  }
}

class Index extends WebPageWithTheme
{
  public function getContent(): string
  {
    return "About page in ".$this->theme->getColor();
  }
}
