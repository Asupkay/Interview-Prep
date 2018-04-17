def in_array(magazine, word):
    try:
        value_index = magazine.index(word)
        return value_index
    except:
        return -1

def ransom_note(magazine, ransom):
    i = 0
    while i < len(ransom):
        position = in_array(magazine, ransom[i])
        if position > -1:
            ransom.pop(0)
            magazine.pop(position)
        else:
            return False
    return True
    

m, n = map(int, input().strip().split(' '))
magazine = input().strip().split(' ')
ransom = input().strip().split(' ')
answer = ransom_note(magazine, ransom)
if(answer):
    print("Yes")
else:
    print("No")
    
