def count_items(arr):
    if(len(arr) < 2):
        return 1
    else:
        return 1 + count_items(arr[1:])
    
print(count_items([1,2,3,4,5,7,8,9]))