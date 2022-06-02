echo "Running tests..."
echo

output=$(./a.out test)
expected_output="Binary of 5: 0000 0101
Binary of 9: 0000 1001
a = 5, b = 9
a&b = 1
Binary: 0000 0001
a|b = 13
Binary: 0000 1101
~a = 250
Binary: 1111 1010"

if [ $? -eq 0 ] ; then
  echo "Pass: Program exited zero"
else
  echo "Fail: Program did not exit zero"
  exit 1
fi

if [ "$output" == "$expected_output" ] ; then
  echo "Pass: Output is correct"
else
  echo "Expected '$expected_output' but got: $output"
  exit 1
fi

echo
echo "All tests passed."

exit 0
