def summary_report(grades)
  grade_colours = ["Green", "Amber"]
  grade_count = []
  grades_array = grades.split(", ")

  grade_colours.each do |grade|
    if grades_array.include?(grade)
      p grade
      grade_count.push({ grade => grades_array.count(grade)})
    end
  return grade_count.each do |row|
    row
  end
  end




  # grade_count_green = grades_array.count(grade_green)
  # grade_count_amber = grades_array.count(grade_amber)
  #
  # if grade_count_green && grade_count_amber > 0
  #   return "#{grade_green}: #{grade_count_green}\n#{grade_amber}: #{grade_count_amber}"
  # elsif grade_count_green > 0
  #   return "#{grade_green}: #{grade_count_green}"
  # elsif grade_count_amber > 0
  #   return "#{grade_amber}: #{grade_count_amber}"
  # end
end
