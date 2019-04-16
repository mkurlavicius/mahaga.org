class Integer
  
  def more_than_zero?
    self > 0
  end
  
  def less_or_same?(integer)
    self <= integer
  end
  
  def more_or_same?(integer)
    self >= integer 
  end
  
  def more_than?(integer)
    self > integer
  end
  
  def less_than?(integer)
    self < integer
  end
  
  def is?(integer)
    self == integer
  end
  
end