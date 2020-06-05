package com.ibm.emart.item.service;

import static java.lang.Boolean.FALSE;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import com.ibm.emart.item.repository.ItemRepository;
import org.junit.Test;

import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
class ItemServiceTest {

  @Mock
  ItemRepository itemRepository;

  @InjectMocks
  ItemServiceImp itemServiceImp;

  @Test
  void newitem() {
    when(itemRepository.getList().isEmpty())
    .thenReturn(FALSE);
    assertEquals(FALSE, itemServiceImp.getList());

  }

  @Test
  void getList() {
  }

  @Test
  void delete() {
  }

  @Test
  void updateitem() {
  }
}