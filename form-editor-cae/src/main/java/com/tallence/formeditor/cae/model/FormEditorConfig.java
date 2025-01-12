/*
 * Copyright 2020 Tallence AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.tallence.formeditor.cae.model;

import com.tallence.formeditor.elements.FormElement;

import java.util.List;

public class FormEditorConfig {

  private String formActionUrl;

  private List<FormElement<?>> formElements;

  public String getFormActionUrl() {
    return formActionUrl;
  }

  public void setFormActionUrl(String formActionUrl) {
    this.formActionUrl = formActionUrl;
  }

  public List<FormElement<?>> getFormElements() {
    return formElements;
  }

  public void setFormElements(List<FormElement<?>> formElements) {
    this.formElements = formElements;
  }


}
