import React, { useEffect, useRef, useState } from 'react';
import { FlatList,Alert } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Skill } from '../../components/Skill';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form, FormTitle } from './styles';

import { database } from '../../databases';
import { SkillModel } from '../../databases/model/skillModel';
import { Q } from '@nozbe/watermelondb';

export function Home() {
  const [type, setType] = useState<MenuTypeProps>("soft");
  const [name, setName] = useState('');
  const [skills, setSkills] = useState<SkillModel[]>([]);
  const [skill, setSkill] = useState<SkillModel>({} as SkillModel);

  const bottomSheetRef = useRef<BottomSheet>(null);

  async function handleNewSkillSave() {
    if (skill.id) {
      await database.write(async () => {
        await skill.update(data => {
          data.name = name,
            data.type = type
        });
      });

      Alert.alert("Updated!");
      setSkill({} as SkillModel);
    } else {
      await database.write(async () => {
        await database
          .get<SkillModel>('skills')
          .create(data => {
            data.name = name,
              data.type = type
          });
      });
      Alert.alert("Created!");
    }

    bottomSheetRef.current?.collapse(); // fecha o bottomSheet
    fetchData();
  }

  function confirmDeleteSkill(item: SkillModel){
    Alert.alert(
      "Remover Skill",
      "Deseja realmente confirmar a remoção da sua Skill?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
        },
        { 
          text: "Confirmar", 
          onPress: ()=> handleRemove(item)
        }
      ]
    );
  }

  async function handleRemove(item: SkillModel) {

    try {
      await database.write(async () => {
        await item.destroyPermanently();
      });
      fetchData();
      Alert.alert("Deleted!");
    } catch (error: any) {
      Alert.alert("Error!", error.message);
    }

  }


  async function handleEdit(item: SkillModel) {
    Alert.alert(
      "Editar Skill",
      "Deseja realmente editar sua Skill?",
      [
        {
          text: "Cancelar",
          onPress: () => bottomSheetRef.current?.collapse(),
        },
        { 
          text: "Confirmar", 
          onPress: ()=> {
            setSkill(item);
            setName(item.name);
            bottomSheetRef.current?.expand();
          }
        }
      ]
    );
    
  }

  async function fetchData() {
    const skillCollection = database.get<SkillModel>('skills');
    const response = await skillCollection.query(Q.where('type', type)).fetch();

    setSkills(response);
  }

 useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <Container>
      <Title>About me</Title>
      <Menu
        type={type}
        setType={setType}
      />

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Skill
            data={item}
            onEdit={() => handleEdit(item)}
            onRemove={() => confirmDeleteSkill(item)}
          />
        )}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['1%', '35%']}
      >
        <Form>
          <FormTitle>Skill</FormTitle>

          <Input
            placeholder="New skill..."
            onChangeText={setName}
            value={name}
          />

          <Button
            title={skill? "Editar":"Save"}
            onPress={handleNewSkillSave}
            
          />
        </Form>
      </BottomSheet>
    </Container>
  );
}