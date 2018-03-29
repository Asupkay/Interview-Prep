def array_left_rotation(a, n, k):

    for i in range(0,k):
        a.append(a.pop(0))
    
    answer = str(a.pop(0))
    for i in range(1,n):
        answer = answer + " " + str(a.pop(0))

    return answer

n, k = map(int, input().strip().split(' '))
a = list(map(int, input().strip().split(' ')))
answer = array_left_rotation(a, n, k);
print(answer)

