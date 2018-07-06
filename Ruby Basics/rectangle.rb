def area(length, width)
	length * width
end

def perimeter(length, width)
	(length + width) * 2
end

puts area(10, 5) 
# 50

puts perimeter(3, 9) 
# 24

def volume(length, width, height)
	length * width * height
end

puts volume(2, 3, 4)
# 24

def circle_area(radius)
	Math::PI * radius ** 2
end

puts circle_area(3)
# 28.274333882308138