# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tops = Style.create(name: "tops", quantity: 4)
bottoms = Style.create( name: "bottoms", quantity: 3 )
dresses = Style.create( name: "dresses", quantity: 2 )
shoes = Style.create( name: "shoes", quantity: 2 )



tops.cloths.create(item: "short sleeve tee", size: "m", color: "purple", description: "matches with light bottoms")
tops.cloths.create(item: "long sleeve tee", size: "m", color: "white", description: "good for outdoor activities")
tops.cloths.create(item: "short sleeve blouse", size: "s", color: "blue", description: "matches with dark bottoms")
tops.cloths.create(item: "long sleeve blouse", size: "s", color: "gray", description: "wear with cardigan")

bottoms.cloths.create(item: "dress pants", size: "4", color: "black", description: "ankle cut")
bottoms.cloths.create(item: "jeans", size: "4", color: "dark wash", description: "high waisted")
bottoms.cloths.create(item: "shorts", size: "s", color: "kahki", description: "hiking")

dresses.cloths.create(item: "short sleeve sun dress", size: "s", color: "black", description: "wear anywhere")
dresses.cloths.create(item: "maxi long sleeve", size: "s", color: "blue", description: "wear anywhere")

shoes.cloths.create(item: "boots", size: "10", color: "brown", description: "hiking")
shoes.cloths.create(item: "tennis shoes", size: "10", color: "black", description: "running")

