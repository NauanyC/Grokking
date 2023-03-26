def find_max(arr):
    biggest = arr[0]
    if(len(arr) <= 1):
        return biggest
    else:        
        if(arr[0] > biggest):
            biggest = arr[0] 
        return find_max(arr[1:])

print(find_max([1,9,3,2,4,6,9,123,5,31,123]))