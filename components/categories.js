import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{
            paddingBottom: 15
          }}
        >
        {
            categories?.map((category, index) => {
                let isActive = category.id == activeCategory;
                let btnClass = isActive? ' bg-gray-600' : ' bg-gray-200';
                let textClass = isActive? 'font-semibold text-gray-800' : 'text-gray-500';
                return (
                    <View key={index} className="flex items-center justify-center mr-6">
                        <TouchableOpacity 
                            onPress={()=> setActiveCategory(category.id)}  
                            className={"p-1 rounded-full shadow"+ btnClass}>
                            <Image style={{width: 45, height: 45, borderRadius: 23}}
                                source={category.image} />
                            
                        </TouchableOpacity>
                        <Text className={"text-sm "+textClass}>{category.name}</Text>
                    </View>
                )
            })
        }
        </ScrollView>
      
    </View>
  )
}