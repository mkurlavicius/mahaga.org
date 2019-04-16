class Array

  def top(attribute)
    sorted = self.sort do |x,y|
      x.try(attribute) <=> y.try(attribute)
    end
    top_value = sorted.try(:last).try(attribute)
    sorted.select do |item|
      item.try(attribute) == top_value
    end
  end
  
  def have_at_least_one?(predicate)
    self.select { |item| item.try(predicate) && item } || nil
  end
  
  def all_of_them?(predicate)
    self.each do |item| 
      return nil if !item.try(predicate)
    end
    true
  end
  
  def execute(action)
    self.each { |item| item.try(action) }
  end

end
  
  
  