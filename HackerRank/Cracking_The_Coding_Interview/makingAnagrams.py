stringA = input()
stringB = input()

i = 0
while i < len(stringA):
    position = stringB.find(stringA[i])
    if position > -1:
        stringA = stringA[:i] + stringA[i+1:]
        stringB = stringB[:position] + stringB[position+1:]
    else:
        i+=1

print(len(stringA) + len(stringB))
        
