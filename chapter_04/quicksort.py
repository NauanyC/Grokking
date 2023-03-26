def quicksort(array):
    if len(array) < 2:
        return array
    else:       
        pivot = array[0]
        left_arr = [i for i in array[1:] if i <= pivot]
        right_arr = [i for i in array[1:] if i > pivot]      
        return quicksort(left_arr) + [pivot] + quicksort(right_arr)

print(quicksort([3,65,9,11, 1]))